import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../api/CharacterAPI';
import { Character } from '../Characters/interfaces';
import Loading from '../Generic/Loading';

import CharacterInfo from '../Characters/CharacterInfo';

export default function CharacterPage() {
    const { name } = useParams();
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (name) {
            console.log('encodeURIComponent(name)', encodeURIComponent(name));
            fetchCharacter(encodeURIComponent(name)).then((data) => {
                setCharacter(data);
            });
        }
    }, [name]);

    if (!character) return <Loading />;

    return (
        <>
            <CharacterInfo character={character} />
        </>
    );
}
