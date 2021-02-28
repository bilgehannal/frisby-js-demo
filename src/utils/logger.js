module.exports = {
    info: (data) => {
        console.log(`[INFO] ${data}`)
    },
    debug: (data) => {
        if(process.env.DEBUG_MODE_ACTIVE === "enable") {
            console.log(`[DEBUG] ${data}`)
        }
    }
}