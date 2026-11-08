const container = document.getElementById('moteContainer');
    const numMotes = 50;

    for (let i = 0; i < numMotes; i++) {
        const mote = document.createElement('div');
        mote.className = 'mote';
        
        const size = Math.random() * 3 + 1;
        mote.style.width = `${size}px`;
        mote.style.height = `${size}px`;
        
        mote.style.left = `${Math.random() * 100}vw`;
        mote.style.animationDelay = `${Math.random() * -10}s`;
        mote.style.animationDuration = `${Math.random() * 5 + 8}s`;
        
        container.appendChild(mote);
    }
