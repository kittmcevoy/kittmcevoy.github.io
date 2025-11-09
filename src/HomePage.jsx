import Header from './header.jsx';

function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
        <div className="min-h-screen flex items-center pt-20 justify-center">
          <div className="text-center">
            <p className="text-3xl text-charcoal font-bold">Hello, my name is <span className="text-gold">Kitt McEvoy</span>.</p>
            <p className="text-xl text-charcoal font-bold"> I am currently a DevOps engineer working in the Guidewire space.</p>

          </div>

        </div>

    </div>
  );
}

export default HomePage;
