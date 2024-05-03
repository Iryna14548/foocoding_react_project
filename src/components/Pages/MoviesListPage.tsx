import '../../Styles/Hero.css';

export default function MoviesPage() {
    // const [books, setBooks] = useState<Spell[]>([]);

    return (
        <>
            <div>
                <h1 className="hero__title">Movie List</h1>
                <h3 className="hero__subheading ">Discover the wizarding world</h3>
                <p className="hero__preamble">
                    Explore the magic on screen with our Harry Potter movie list! Journey through each chapter
                    of the saga and experience the enchantment, battles, and friendships of the wizarding
                    world. Watch the adventures unfold.
                </p>

                {/* <SpellList spells={spells} /> */}
            </div>
        </>
    );
}
