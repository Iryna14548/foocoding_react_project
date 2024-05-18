import { useCallback, useContext, useState } from 'react';
import './UserForm.css';
import { CartContext } from '../context/CartContext/CartContext';
const HOSTING_PATH = 'https://foocoding-portfolio-server.onrender.com';

interface UserFormProps {
    handleOrderIsFinished: () => void;
}

export default function UserForm({ handleOrderIsFinished }: UserFormProps) {
    const { cartBooks } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmitCart = useCallback(() => {
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill in all the fields');
            return;
        }

        const order = {
            ...formData,
            cartItems: cartBooks,
        };

        fetch(`${HOSTING_PATH}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                handleOrderIsFinished();
            });
    }, [formData, cartBooks]);

    return (
        <>
            <form className="user-form">
                <h2>Place Your Order Here!</h2>

                <section className="form-section">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                </section>
            </form>
            <button onClick={handleSubmitCart} className="user-form__button">
                Make your order
            </button>
        </>
    );
}
