
        const translations = {
            pt: {
                "g1": "G1",
                "terreo": "Térreo",
                "segundo-andar": "2º andar",
                "terceiro-andar": "3º andar",
                "quarto-andar": "4º andar",
                "mapa-gamer": "Mapa Gamer"
            },
            en: {
                "g1": "G1",
                "terreo": "Ground Floor",
                "segundo-andar": "2nd Floor",
                "terceiro-andar": "3rd Floor",
                "quarto-andar": "4th Floor",
                "mapa-gamer": "Gamer Map"
            },
            es: {
                "g1": "G1",
                "terreo": "Planta Baja",
                "segundo-andar": "2º Piso",
                "terceiro-andar": "3º Piso",
                "quarto-andar": "4º Piso",
                "mapa-gamer": "Mapa Gamer"
            }
        };

        function changeLanguage(lang) {
            localStorage.setItem('selectedLanguage', lang); // Armazena o idioma
            updateLanguage(lang);
        }

        function updateLanguage(lang) {
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                element.textContent = translations[lang][key];
            });
            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
            const select = document.querySelector('.language-select');
            select.value = lang; // Sincroniza o dropdown
        }

        function toggleLayout() {
            const switchElement = document.querySelector('.toggle-switch');
            switchElement.classList.toggle('on');
            if (switchElement.classList.contains('on')) {
                window.location.href = 'M2.html';
            }
        }

        // Carrega o idioma salvo ou usa português como padrão
        window.onload = () => {
            const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
            updateLanguage(savedLang);
        };
