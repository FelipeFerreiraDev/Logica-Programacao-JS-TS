function recursiva(max) {
    if(max>=10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);

// Serve como um for ou um while