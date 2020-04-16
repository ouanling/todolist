

const counterItems = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
        
    };
};
const counterProjects = () => {};

export {counterItems}