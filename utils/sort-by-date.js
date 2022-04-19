/**
 * Takes params A and B and sorts data in descending order.
 * @param a - date
 * @param b - date
 * @returns data in descending order..
 */

const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)

}

export default sortByDate;