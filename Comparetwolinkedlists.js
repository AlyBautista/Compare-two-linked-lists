function CompareLists(llist1, llist2) {
    let a = llist1;
    let b = llist2;

    while (a !== null && b !== null) {
        if (a.data !== b.data) {
            return 0; 
        }
        a = a.next;
        b = b.next;
    }
    return (a === null && b === null) ? 1 : 0;
}
