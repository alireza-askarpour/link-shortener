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
