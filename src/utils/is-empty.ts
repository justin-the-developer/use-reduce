/**
 *
 * @param iter test
 */
export const isEmpty = (iter?: any[] | Record<string, any>) => {
    if (iter === undefined) return true;

    return Object.keys(iter).length === 0;
};
