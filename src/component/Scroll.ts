const Scroll = (x: number) => {
    window.scroll({
        top: x,
        behavior: "smooth",
    });
}

export default Scroll;