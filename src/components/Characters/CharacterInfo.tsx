import React from 'react';
import { Character as Characterinterface } from '';

interface CharacterProps {
    character: Characterinterface;
}

export default function Character() {
    return (
        <div>
            <h1>{character.name}</h1>
        </div>
    );
}
