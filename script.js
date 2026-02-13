const { createApp } = Vue

createApp({
    data() {
        return {
            mensagemHeader: "Kayla's Collection",
            showWelcomeModal: true,
            modalGramofone: false,
            modalTypewriter: false,
            modalPortaRetrato: false,
            modalPortaRetratoCircular: false,
            bookModal: {
                open: false,
                book: null,
                animate: false,
                showCoverOnly: false,
                currentPage: 1
            },
            imagemPortaRetrato: null,
            typewriterFullText: "Hello, Kayla\n\nWe hope you are enjoying your website\n:)\n\n\n\nReady for the easter egg\?\n3...\n2...\n1...\nand...\nu r gay",
            typewriterDisplay: "",
            typewriterSpeed: 150,
            typewriterTimer: null,

            discoAtivo: null,
            discos: [
                { id: 1, titulo: "Arrival", artista: "ABBA", cor: "#1a4a1a", sigla: "AA", imagem: "assets/records/abba_arrival.jpg" },
                { id: 2, titulo: "Voulez-Vous", artista: "ABBA", cor: "#4a1212", sigla: "VV", imagem: "assets/records/abba_voulez_vous.jpg" },
                { id: 3, titulo: "Rumours", artista: "Fleetwood Mac", cor: "#d4c3a1", sigla: "RM", imagem: "assets/records/fleetwood_mac_rumours.jpg" },
                { id: 4, titulo: "I'll Cry If I Want To", artista: "Lesley Gore", cor: "#f2a2c0", sigla: "LG", imagem: "assets/records/lesley_gore_cry.jpg" },
                { id: 5, titulo: "If You Can Believe Your Eyes and Ears", artista: "The Mamas & the Papas", cor: "#d4af37", sigla: "MP", imagem: "assets/records/mamas_papas_believe.jpg" },
                { id: 6, titulo: "Cosmo's Factory", artista: "CCR", cor: "#1e3a5f", sigla: "CF", imagem: "assets/records/ccr_cosmos_factory.jpg" },
                { id: 7, titulo: "At Last!", artista: "Etta James", cor: "#1a1a1a", sigla: "EJ", imagem: "assets/records/etta_james_atlast.jpg" },
                { id: 8, titulo: "Memories", artista: "The Vogues", cor: "#3d251a", sigla: "VW", imagem: "assets/records/vogues_memories.jpg" },
                { id: 9, titulo: "Parallel Lines", artista: "Blondie", cor: "#f4f4f4", sigla: "PL", imagem: "assets/records/blondie_parallel_lines.jpg" },
                { id: 10, titulo: "Tapestry", artista: "Carole King", cor: "#8b735b", sigla: "TY", imagem: "assets/records/carole_king_tapestry.jpg" },
                { id: 11, titulo: "The Game", artista: "Queen", cor: "#c0c0c0", sigla: "TG", imagem: "assets/records/queen_the_game.jpg" }
            ],

            p1: [
                {
                    id: 'l1', tipo: 'livro', titulo: 'Mrs. Dalloway', autor: 'Virginia Woolf', cor: '#2b1a13', textoCor: '#d4af37', altura: 88, largura: 28,
                    synopsis: "The novel details a day in the life of Clarissa Dalloway, a high-society woman in post-First World War England, as she prepares for a party she is hosting that evening.",
                    quote: "She had a perpetual sense of being out, out, far out to sea and alone; she always felt that it was very, very dangerous to live even one day."
                },
                {
                    id: 'l2', tipo: 'livro', titulo: 'Orlando', autor: 'Virginia Woolf', cor: '#4a0e0e', textoCor: '#c5a059', altura: 92, largura: 30,
                    synopsis: "A high-spirited historical fantasy that follows the adventures of a poet who changes sex from a man to a woman and lives for centuries, meeting key figures of English literary history.",
                    quote: "I am sick to death of this particular self. I should like another."
                },
                {
                    id: 'l3', tipo: 'livro', titulo: 'The Voyage Out', autor: 'Virginia Woolf', cor: '#0a1421', textoCor: '#b8860b', altura: 95, largura: 32,
                    synopsis: "Woolf's first novel follows Rachel Vinrace on a voyage to South America on her father's ship, marking her journey from innocence to self-discovery and tragic awakening.",
                    quote: "It's not cathedrals, or pantheons, or stars that are beautiful; it's what we do with our lives."
                },
                {
                    id: 'l4', tipo: 'livro', titulo: 'The Bell Jar', autor: 'Sylvia Plath', cor: '#1e2b18', textoCor: '#d4af37', altura: 90, largura: 29,
                    synopsis: "A semi-autobiographical novel following Esther Greenwood, a young woman whose talent and success as a magazine intern in New York slowly give way to a descent into mental illness.",
                    quote: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am."
                },
                {
                    id: 'l5', tipo: 'livro', titulo: 'The Unabridged Journals', autor: 'Sylvia Plath', cor: '#1a1024', textoCor: '#c5a059', altura: 98, largura: 35,
                    synopsis: "A raw and intimate collection of Sylvia Plath's personal writings, covering her life from her college years to her final days, revealing the mind behind the poetry.",
                    quote: "I want to live and feel all the shades, tones and variations of mental and spiritual experience possible in my life."
                },
                {
                    id: 'l6', tipo: 'livro', titulo: 'The Great Gatsby', autor: 'F. Scott Fitzgerald', cor: '#1f1f1f', textoCor: '#b8860b', altura: 85, largura: 26,
                    synopsis: "Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
                    quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
                },
                {
                    id: 'l7', tipo: 'livro', titulo: 'Alice in Wonderland', autor: 'Lewis Carroll', cor: '#3d251a', textoCor: '#d4af37', altura: 82, largura: 28,
                    synopsis: "The story of a young girl named Alice who falls through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures.",
                    quote: "We're all mad here. I'm mad. You're mad."
                },
                { id: 'p1', tipo: 'planta', variedade: 'plant1', altura: 68, largura: 100 },
                { id: 'g1', tipo: 'gramofone', titulo: 'Gramofone', cor: '#1a1a1a', altura: 75, largura: 100 }
            ],
            p2: [
                {
                    id: 'l8', tipo: 'livro', titulo: 'Wuthering Heights', autor: 'Emily Brontë', cor: '#2b1a13', textoCor: '#c5a059', altura: 94, largura: 30,
                    synopsis: "A dark tale of the intense and almost demonic love between Catherine Earnshaw and the foundling Heathcliff on the bleak Yorkshire moors.",
                    quote: "Whatever our souls are made of, his and mine are the same."
                },
                {
                    id: 'l9', tipo: 'livro', titulo: 'The Secret History', autor: 'Donna Tartt', cor: '#4a0e0e', textoCor: '#b8860b', altura: 96, largura: 34,
                    synopsis: "Under the influence of their charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries.",
                    quote: "Beauty is terror. Whatever we call beautiful, we quiver before it."
                },
                {
                    id: 'l10', tipo: 'livro', titulo: 'The Picture of Dorian Gray', autor: 'Oscar Wilde', cor: '#0a1421', textoCor: '#d4af37', altura: 88, largura: 28,
                    synopsis: "A philosophical novel about a man who sells his soul to ensure that a portrait of him will age and fade while he remains young and beautiful forever.",
                    quote: "The only way to get rid of a temptation is to yield to it."
                },
                {
                    id: 'l11', tipo: 'livro', titulo: 'Frankenstein', autor: 'Mary Shelley', cor: '#1e2b18', textoCor: '#c5a059', altura: 92, largura: 30,
                    synopsis: "Victor Frankenstein, a scientist, creates a sapient creature in an unorthodox scientific experiment, leading to tragic consequences for both creator and creation.",
                    quote: "Beware; for I am fearless, and therefore powerful."
                },
                {
                    id: 'l12', tipo: 'livro', titulo: 'Pride and Prejudice', autor: 'Jane Austen', cor: '#1a1024', textoCor: '#b8860b', altura: 90, largura: 29,
                    synopsis: "The story follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
                    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
                },
                { id: 'pr1', tipo: 'porta-retrato', titulo: 'Memory', cor: '#2a2a2a', altura: 70, largura: 105, imagem: 'assets/images/Zosia.webp' },
                {
                    id: 'l13', tipo: 'livro', titulo: 'Jane Eyre', autor: 'Charlotte Brontë', cor: '#3d251a', textoCor: '#d4af37', altura: 94, largura: 32,
                    synopsis: "The novel follows the emotions and experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the master of Thornfield Hall.",
                    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will."
                },
                {
                    id: 'l14', tipo: 'livro', titulo: 'Little Women', autor: 'Louisa May Alcott', cor: '#1f1f1f', textoCor: '#c5a059', altura: 88, largura: 30,
                    synopsis: "The lives of four sisters—Meg, Jo, Beth, and Amy—as they grow from childhood to womanhood in the Civil War era.",
                    quote: "I am not afraid of storms, for I am learning how to sail my ship."
                },
                {
                    id: 'l15', tipo: 'livro', titulo: 'A Room of One\'s Own', autor: 'Virginia Woolf', cor: '#2b1a13', textoCor: '#b8860b', altura: 86, largura: 25,
                    synopsis: "An extended essay exploring the historical and social injustices that have prevented women from achieving their full creative potential.",
                    quote: "A woman must have money and a room of her own if she is to write fiction."
                },
                {
                    id: 'l16', tipo: 'livro', titulo: 'The Waves', autor: 'Virginia Woolf', cor: '#4a0e0e', textoCor: '#d4af37', altura: 90, largura: 27,
                    synopsis: "Woolf's most experimental work, consisting of soliloquies spoken by six characters throughout their lives, from childhood to old age.",
                    quote: "I am made and remade continually. Different people draw different words from me."
                },
                { id: 'me1', tipo: 'maquina-de-escrever', altura: 78, largura: 100 }
            ],
            p3: [
                { id: 'pr2', tipo: 'porta-retrato', titulo: '2026', cor: '#2a2a2a', altura: 75, largura: 115, imagem: 'assets/images/Rio.webp' },
                { id: 'k1', tipo: 'kpop-album', titulo: 'Red Velvet', cor: '#00b74a', textoCor: '#ffffff', altura: 92, largura: 52 },
                { id: 'k2', tipo: 'kpop-album', titulo: 'S', cor: '#c9a04c', textoCor: '#1a1a1a', altura: 78, largura: 52 },
                { id: 'k3', tipo: 'kpop-album', titulo: 'KATSEYE', cor: '#6b4d8e', textoCor: '#000000', altura: 85, largura: 52 },
                { id: 'cd1', tipo: 'cd', titulo: 'Electra Heart', cor: '#8b4049', textoCor: '#f5e6d3', altura: 60, largura: 18 },
                { id: 'cd2', tipo: 'cd', titulo: 'Submarine', cor: '#264653', textoCor: '#f4a261', altura: 60, largura: 18 },
                { id: 'cd3', tipo: 'cd', titulo: 'Midnights', cor: '#2d2d5f', textoCor: '#b8b8d1', altura: 60, largura: 18 },
                { id: 'cd4', tipo: 'cd', titulo: 'Born to Die', cor: '#5d2e2e', textoCor: '#d4af37', altura: 60, largura: 18 },
                { id: 'pr3', tipo: 'porta-retrato', titulo: '2026', cor: '#2a2a2a', altura: 75, largura: 115, imagem: 'assets/images/Holly.jpg' },
                {
                    id: 'l17', tipo: 'livro', titulo: 'Ariel', autor: 'Sylvia Plath', cor: '#1e2b18', textoCor: '#d4af37', altura: 85, largura: 24,
                    synopsis: "Published posthumously, this poetry collection contains Plath's most famous and intense works, written during a final burst of creativity.",
                    quote: "Out of the ash I rise with my red hair and I eat men like air."
                },
                {
                    id: 'l18', tipo: 'livro', titulo: 'To the Lighthouse', autor: 'Virginia Woolf', cor: '#2b1a13', textoCor: '#c5a059', altura: 89, largura: 28,
                    synopsis: "The novel centers on the Ramsay family and their visits to the Isle of Skye, focusing on the subjective experience of time and human relationships.",
                    quote: "For nothing was simply one thing. The other person, fish or fowl, was several things at once."
                },
                {
                    id: 'l19', tipo: 'livro', titulo: 'The Raven', autor: 'Edgar Allan Poe', cor: '#0a1421', textoCor: '#b8860b', altura: 93, largura: 26,
                    synopsis: "A narrative poem noted for its musicality, stylized language, and supernatural atmosphere, tracking a distraught lover's slow descent into madness.",
                    quote: "Quoth the Raven, 'Nevermore'."
                },
                {
                    id: 'l20', tipo: 'livro', titulo: 'Dracula', autor: 'Bram Stoker', cor: '#1a1024', textoCor: '#d4af37', altura: 95, largura: 32,
                    synopsis: "The quintessential gothic horror novel, told through letters and diary entries, following Count Dracula's attempt to move from Transylvania to England.",
                    quote: "I am all alone, and I hear in my fingers the music of the spheres."
                },
                {
                    id: 'l21', tipo: 'livro', titulo: 'Emma', autor: 'Jane Austen', cor: '#1f1f1f', textoCor: '#c5a059', altura: 91, largura: 30,
                    synopsis: "A youthful and precocious woman in Regency England, Emma Woodhouse, busies herself with matchmaking and meddling in the romantic lives of her friends and neighbors.",
                    quote: "I am going to take a heroine whom no one but myself will much like."
                },
                {
                    id: 'l22', tipo: 'livro', titulo: 'Persuasion', autor: 'Jane Austen', cor: '#3d251a', textoCor: '#b8860b', altura: 88, largura: 28,
                    synopsis: "Anne Elliot, a woman of deep sensitivity, meets her former fiancé Captain Wentworth again after eight years, exploring themes of second chances and social change.",
                    quote: "There is no charm equal to tenderness of heart."
                },
                {
                    id: 'l23', tipo: 'livro', titulo: 'Moby Dick', autor: 'Herman Melville', cor: '#4a0e0e', textoCor: '#d4af37', altura: 96, largura: 35,
                    synopsis: "The sailor Ishmael tells the story of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against the white whale Moby Dick.",
                    quote: "I know not all that may be coming, but be it what it will, I'll go to it laughing."
                },
                {
                    id: 'l24', tipo: 'livro', titulo: 'The Inferno', autor: 'Dante Alighieri', cor: '#2b1a13', textoCor: '#c5a059', altura: 92, largura: 30,
                    synopsis: "The first part of Dante's Divine Comedy, describing the poet's journey through the nine circles of Hell, guided by the Roman poet Virgil.",
                    quote: "Abandon all hope, ye who enter here."
                }
            ],
            p4: [
                { id: 'wf1', tipo: 'worldFair', altura: 'clamp(80px, 15vw, 130px)', largura: 'clamp(80px, 15vw, 130px)', imagem: 'assets/images/worldsFairImg.png' },
                { id: 'p3', tipo: 'planta', variedade: 'plant3', altura: 60, largura: 75 },
                { id: 'pr4', tipo: 'porta-retrato', cor: '#2a2a2a', altura: 75, largura: 110, imagem: 'assets/images/Emily.jpg' },
                { id: 'f1', tipo: 'filme', titulo: 'Jurassic Park', cor: '#d4461f', textoCor: '#ffd700', altura: 78, largura: 28 },
                { id: 'f2', tipo: 'filme', titulo: 'Breakfast at Tiffany\'s', cor: '#81b7d2', textoCor: '#ffffff', altura: 78, largura: 28 },
                { id: 'f3', tipo: 'filme', titulo: 'EEAAO', cor: '#ff6b6b', textoCor: '#ffffff', altura: 78, largura: 28 },
                { id: 'f4', tipo: 'filme', titulo: 'Mulholland Drive', cor: '#2d1b4e', textoCor: '#c9a0dc', altura: 78, largura: 28 },
                { id: 'f5', tipo: 'filme', titulo: 'Clue', cor: '#2d5016', textoCor: '#f4e4c1', altura: 78, largura: 28 },
                { id: 'f6', tipo: 'filme', titulo: 'Devil Wears Prada', cor: '#4a0e0e', textoCor: '#ffffff', altura: 78, largura: 28 },
                { id: 'f7', tipo: 'filme', titulo: 'Kill Bill', cor: '#ffd700', textoCor: '#000000', altura: 78, largura: 28 },
                { id: 'gt1', tipo: 'globo-terrestre', altura: 78, largura: 100 },
                { id: 'p4', tipo: 'planta', variedade: 'plant4', altura: 60, largura: 75 }
            ]
        }
    },
    created() {
        this.discoAtivo = this.discos[0];

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.bookModal.open) this.closeBook();
            if (e.key === 'Escape' && this.modalTypewriter) this.closeTypewriter();
        });
    },
    mounted() {
        // nothing for now
    },
    methods: {
        closeWelcomeModal() {
            console.log('closeWelcomeModal called');
            this.showWelcomeModal = false;
        },
        toggleItem(item) {
            if (item.tipo === 'planta') return;
            if (item.tipo === 'gramofone') {
                this.modalGramofone = true;
                return;
            }
            if (item.tipo === 'maquina-de-escrever') {
                this.openTypewriter();
                return;
            }
            if (item.tipo === 'porta-retrato') {
                this.modalPortaRetrato = true;
                this.imagemPortaRetrato = item.imagem || null;
                this.modalPortaRetratoCircular = false;
                return;
            }
            if (item.tipo === 'worldFair') {
                this.modalPortaRetrato = true;
                this.imagemPortaRetrato = item.imagem || null;
                this.modalPortaRetratoCircular = true;
                return;
            }
            if (item.tipo === 'livro') {
                this.bookModal.book = item;
                this.bookModal.open = true;
                this.bookModal.animate = false;
                this.bookModal.showCoverOnly = true;
                this.bookModal.currentPage = 1;
                document.body.style.overflow = 'hidden';
                return;
            }
            const lists = [this.p1, this.p2, this.p3, this.p4];
            const prev = item.selecionado;
            lists.forEach(l => l.forEach(i => i.selecionado = false));
            item.selecionado = !prev;
        },
        closeBook() {
            this.bookModal.animate = false;
            setTimeout(() => {
                this.bookModal.open = false;
                this.bookModal.book = null;
                this.bookModal.currentPage = 1;
                document.body.style.overflow = '';
                this.bookModal.showCoverOnly = false;
            }, 300);
        },

        onCoverClick() {
            if (!this.bookModal.open) return;
            if (this.bookModal.showCoverOnly) {
                this.bookModal.animate = true;

                setTimeout(() => {
                    this.bookModal.showCoverOnly = false;
                }, 240);
            }
        },

        closeBookFromPages() {
            this.bookModal.showCoverOnly = true;
            this.bookModal.animate = false;
        },
        trocarDisco(disco) {
            this.discoAtivo = disco;
        },
        scrollCarrossel(direction) {
            const container = this.$refs.listaDiscos;
            const scrollAmount = 150;
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        },
        openTypewriter() {
            this.modalTypewriter = true;
            this.startTypewriter();
        },
        startTypewriter() {
            this.typewriterDisplay = '';
            if (this.typewriterTimer) {
                clearInterval(this.typewriterTimer);
                this.typewriterTimer = null;
            }
            let i = 0;
            this.typewriterTimer = setInterval(() => {
                this.typewriterDisplay += this.typewriterFullText.charAt(i);
                i += 1;
                if (i >= this.typewriterFullText.length) {
                    clearInterval(this.typewriterTimer);
                    this.typewriterTimer = null;
                }
            }, this.typewriterSpeed);
        },
        closeTypewriter() {
            this.modalTypewriter = false;
            if (this.typewriterTimer) {
                clearInterval(this.typewriterTimer);
                this.typewriterTimer = null;
            }
        },
        fecharModais() {
            this.modalGramofone = false;
            this.modalPortaRetrato = false;
            this.modalPortaRetratoCircular = false;
            this.closeTypewriter();
        }
    }
}).mount('#app')