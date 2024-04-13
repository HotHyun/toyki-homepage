const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'Explore',
        links: '#',
        namesub: [
            {
                id: 4,
                sub: 'Visions & Mission',
                links: '/visions-mission'
            },
            {
                id: 8,
                sub: 'Our Projects',
                links: '/home-v2'
            },
        ]
    },
    {
        id: 4,
        name: 'Team',
        links: '/team',
        
    },
    {
        id: 7,
        name: 'Contact',
        links: '/contact',
    },

    
]

export default menus;