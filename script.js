
        // Array manually ordered based on priority requested:
        const channels = [
            
            { name: "Gw Stream Hindi", src: "https://gwserverhindi.pages.dev/" },
            { name: "Gw Stream Eng", src: "https://hux.codewithprashant07.workers.dev/" },
            { name: "Gw Stream Telugu", src: "https://gwservertelugu.pages.dev/" },
            { name: "Gw Stream Tamil", src: "https://gwservertamil.pages.dev/" },
            
            
            { name: "Fox Cricket HD", src: "https://cricketstan.github.io/Fox-Cricket-/" },
            { name: "Zee Cinema", src: "https://zee-seven.vercel.app/" },
            
            
            { name: "SKY NZ 1", src: "https://crickettv.site/sky-nz/player?id=3" },
            { name: "TNT Sports 1", src: "https://cricketstan.github.io/TNT-1/" },
            { name: "PRIME NZ", src: "https://hff-cricketstan.wasmer.app/" },
            
               ];

        const container = document.getElementById('channel-container');
        const player = document.getElementById('video-player');
        const titleLabel = document.getElementById('current-channel-name');

        // Play icon SVG
        const playSVG = `<svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

        function playStream(name, src, btnElement) {
            if(!src) return; 

            player.src = src;
            titleLabel.textContent = name;

            // Manage Active States
            document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');

            // Scroll up to player on Mobile
            if (window.innerWidth <= 1024) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function init() {
            channels.forEach((ch, index) => {
                const btn = document.createElement('button');
                btn.className = 'channel-btn';
                
                // Staggered Entrance Animation
                btn.style.animationDelay = `${index * 0.04}s`;
                
                // Inner HTML (SVG + Text)
                btn.innerHTML = `${playSVG} <span>${ch.name}</span>`;
                
                btn.onclick = () => playStream(ch.name, ch.src, btn);
                container.appendChild(btn);

                // Auto-play the 1st priority channel
                if(index === 0) {
                    setTimeout(() => playStream(ch.name, ch.src, btn), 100);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', 
