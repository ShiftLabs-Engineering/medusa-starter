export const getImageUrlContent = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch image "${url}": ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()

  return Buffer.from(arrayBuffer).toString('binary')
}

/**
 * Reads an image file from the seed-images directory and returns its contents as a binary string
 * @param filename The name of the image file to read
 * @returns The file contents as a binary string
 */
export const getImageFileContent = async (filename: string) => {
  // Using the same approach as the existing code in this file
  const fs = require('fs/promises')
  const path = require('path')

  // Use path.resolve to get an absolute path to the seed-images directory
  const imagePath = path.resolve(process.cwd(), 'src/scripts/media', filename)

  try {
    const data = await fs.readFile(imagePath)
    return data.toString('binary')
  } catch (error) {
    throw new Error(`Failed to read image file "${filename}": ${error.message}`)
  }
}
