import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Generic/Loading';
import { Potion } from '../Potions/interfacesPotion';
import { fetchPotion } from '../../api/PotionsAPI';
import PotionInfo from '../Potions/PotionInfo';

export default function PotionPage() {
    const { name } = useParams();
    const [potionInfo, setPotionInfo] = useState<Potion | null>(null);

    useEffect(() => {
        if (name) {
            fetchPotion(encodeURIComponent(name)).then((data) => {
                setPotionInfo(data);
            });
        }
    }, [name]);

    if (!potionInfo) return <Loading />;

    return (
        <>
            <PotionInfo potionInfo={potionInfo} />
        </>
    );
}
