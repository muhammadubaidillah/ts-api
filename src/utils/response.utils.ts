export const createResponse = <T extends object | null>(
    success: boolean,
    message: string,
    data?: T
) => ({
    success,
    message,
    data,
})