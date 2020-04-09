export const fetchData = async (
  url = './data/small-dataset.json',
  convertValues = true,
) => {
  try {
    const response = await fetch(url)
    const rawData = await response.json()

    if (convertValues) {
      return rawData.map(el => convertValuesToBool(el))
    }

    return rawData
  } catch (err) {
    console.error('fetch error', err)

    return []
  }
}

const keysToConvertToBool = [
  'hit',
  'danceability',
  'gender',
  'mood_acoustic',
  'mood_aggressive',
  'mood_electronic',
  'mood_happy',
  'mood_party',
  'mood_relaxed',
  'mood_sad',
  'timbre',
  'tonal_atonal',
  'voice_instrumental',
]
export const convertValuesToBool = songData => {
  const result = {}

  Object.entries(songData).forEach(([key, value]) => {
    result[key] = keysToConvertToBool.includes(key)
      ? value === 1
        ? 'true'
        : 'false'
      : value
  })

  return result
}
