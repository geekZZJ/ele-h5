export const RAF =
  requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000 / 60)
  }

export const cancelRAF =
  cancelAnimationFrame ||
  function (id: number) {
    clearTimeout(id)
  }
