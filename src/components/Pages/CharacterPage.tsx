import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../api/CharacterAPI';
import { Character } from '../Characters/interfaces';
import Loading from '../Generic/Loading';

import CharacterInfo from '../Characters/CharacterInfo';

export default function CharacterPage() {
    const { name } = useParams();
    const [characterInfo, setCharacterInfo] = useState<Character | null>(null);

    useEffect(() => {
        if (name) {
            fetchCharacter(encodeURIComponent(name)).then((data) => {
                setCharacterInfo(data);
            });
        }
    }, [name]);

    if (!characterInfo) return <Loading />;

    return (
        <>
            <CharacterInfo characterInfo={characterInfo} />
        </>
    );
}
