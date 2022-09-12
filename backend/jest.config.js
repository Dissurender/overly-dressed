/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
    return {
        verbose: true,
        testEnvironment: 'node',
        testMatch: ["**/*.test.js"],
        forceExit: true,
        //clearMocks: true,
    };
};