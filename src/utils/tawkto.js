export default function tawkTo() {
    
    if (!window) {
        throw new Error('DOM is unavailable')
    }

    window.Tawk_API       = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    
    // const script = document.createElement("script");
    // script.id    = 'tawkId';
    // script.async = true;
    // script.src   = 'https://embed.tawk.to/60e93093649e0a0a5ccb79da/1fa7ebgm7';
    // script.charset = 'UTF-8';
    // script.setAttribute('crossorigin', '*');

    var s1=document.createElement("script");
    var s0=document.getElementsByTagName("script")[0];
    
    s1.async=true;
    s1.src='https://embed.tawk.to/60e93093649e0a0a5ccb79da/1fa7ebgm7';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);

}