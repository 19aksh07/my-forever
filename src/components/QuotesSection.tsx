
import { useEffect, useState } from 'react';
import QuoteCard from './QuoteCard';
interface Quote {
  quote: string;
  author: string;
}

const QuotesSection = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const response = await fetch('../../public/quotes.json');
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error loading quotes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [quotes]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-rose-200 text-xl font-['Playfair_Display']">
          Loading our story...
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-200 mb-4 font-['Playfair_Display']">
            Words That Dance in My Heart
          </h2>
          <p className="text-rose-300/70 text-lg font-['Cormorant_Garamond'] italic">
            Each quote a brushstroke in the masterpiece of our love
          </p>
        </div>

        {/* Quotes grid */}
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <QuoteCard 
              key={index} 
              quote={quote} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
