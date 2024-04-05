const Reviews: React.FC = () => {
  return (
    <section className="Reviews">
      <h2 className="coment-Title">Client Reviews</h2>
      <blockquote className="coment-box">
        <q className="quot">
          Boost your product and service's credibility by adding testimonials
          from your clients. People love recommendations so feedback from others
          who've tried it is invaluable.
        </q>
        <h5 className="quoter">~Powell Finwood</h5>
      </blockquote>
      <blockquote className="coment-box">
        <q className="quot">
          Boost your product and service's credibility by adding testimonials
          from your clients. People love recommendations so feedback from others
          who've tried it is invaluable. Boost your product and service's
          credibility by adding testimonials from your clients.
        </q>
        <h5 className="quoter">~Ingrid Correa</h5>
      </blockquote>
      <blockquote className="coment-box">
        <q className="quot">
          Boost your product and service's credibility by adding testimonials
          from your clients.
        </q>
        <h5 className="quoter">~Hannah Elmore</h5>
      </blockquote>
    </section>
  );
};

export default Reviews;
