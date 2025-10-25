export function runtimeFormat(runtime) {
    if (runtime >= 60) {
        return `${Math.floor(runtime / 60)}h ${runtime % 60}m`
    } else {
        return runtime
    }
}