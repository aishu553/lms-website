import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); 
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to TechKnots LMS</h1>
                <p className="tagline">Empowering learners through technology.</p>
                <div className="cta-buttons">
                    <button className="primary-btn" onClick={() => navigate('/login')} > Get Started </button>
                    <button className="secondary-btn">Learn More</button>
                </div>
            </div>
            <style jsx>{`
                .home {
                   background: linear-gradient(160deg, #002d1a, #105f04, #50C878);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                
                .hero-section {
                    text-align: center;
                    max-width: 1200px;
                    padding: 60px 20px;
                    border-radius: 15px;
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 8px 32px rgba(3, 111, 62, 0.1);
                    backdrop-filter: blur(10px);
                    transition: all 0.4s ease;
                    }
                    
                    h1 {
                        font-size: 4rem;
                        margin-bottom: 20px;
                        background: linear-gradient(90deg, #036F3E 0%, #049456 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        animation: fadeIn 1.2s ease-out;
                        }
                        
                        .tagline {
                            font-size: 1.8rem;
                            color: #444;
                            margin-bottom: 40px;
                            animation: fadeIn 1.4s ease-out;
                            }
                            
                            .cta-buttons {
                                display: flex;
                                gap: 20px;
                                justify-content: center;
                                animation: fadeIn 1.6s ease-out;
                                }
                                
                button {
                    padding: 15px 30px;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .primary-btn {
                    background: linear-gradient(90deg, #036F3E 0%, #049456 100%);
                    color: white;
                    border: none;
                    }
                    
                    .secondary-btn {
                        background: transparent;
                        border: 2px solid #036F3E;
                        color: #036F3E;
                        }
                        
                        button:hover {
                            transform: translateY(-3px);
                            box-shadow: 0 5px 15px rgba(3, 111, 62, 0.2);
                            }
                            
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(30px); }
                                to { opacity: 1; transform: translateY(0); }
                                }
                                
                                @media (max-width: 768px) {
                                    h1 { font-size: 2.5rem; }
                                    .tagline { font-size: 1.4rem; }
                    .cta-buttons { flex-direction: column; }
                }
                `}</style>
        </div>
    );
}

export default Home;
