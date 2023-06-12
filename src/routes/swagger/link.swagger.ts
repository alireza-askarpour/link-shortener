/**
 * @swagger
 *      tags:
 *      -   name: Link
 *          description: link section
 */

/**
 * @swagger
 *  /{originalLink}:
 *      post:
 *          tags: [Link]
 *          summary: create short link
 *          parameters:
 *              -   in: path
 *                  name: originalLink
 *                  type: string
 *                  required: true
 *                  description:
 *          responses:
 *              201:
 *                  description: success
 */

/**
 * @swagger
 *  /{shortLink}:
 *      post:
 *          tags: [Link]
 *          summary: redirect short link
 *          parameters:
 *              -   in: path
 *                  name: shortLink
 *                  type: string
 *                  required: true
 *                  description:
 *          responses:
 *              201:
 *                  description: success
 */
