
export const processTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length < 2) return title;
    
    const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const secondLine = words.slice(Math.ceil(words.length /2)).join(' ');
    
    return `${firstLine}\n${secondLine}`;
  };