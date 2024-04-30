import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Generic/Loading';
import { Spell } from '../../Spells/interfacesSpell';
import { fetchSpell } from '../../api/SpellsAPI.';
import SpellInfo from '../../Spells/SpellInfo';

export default function SpellPage() {
    const { name } = useParams();
    const [spellInfo, setSpellInfo] = useState<Spell | null>(null);

    useEffect(() => {
        if (name) {
            fetchSpell(encodeURIComponent(name.replace(':', '/'))).then((data) => {
                setSpellInfo(data);
            });
        }
    }, [name]);

    if (!spellInfo) return <Loading />;

    return (
        <>
            <SpellInfo spellInfo={spellInfo} />
        </>
    );
}
