export default function handler(req, res) {
  const { id } = req.query;
  const userAgent = req.headers['user-agent'] || '';

  const isRoblox = userAgent.includes('Roblox') || 
                   userAgent.includes('RobloxStudio') ||
                   userAgent.includes('RobloxApp');

  const scripts = {
    'WCKD-VERSION-9': `
game:GetService("StarterGui"):SetCore("SendNotification",{
Title = "Script loaded enjoy!",
Text = "creds to Put your name here", 

Button1 = "Yes",
Button2 = "Cancel",
Duration = 30 
})
    `.trim()
  };

  if (!isRoblox) {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(403).send(`
    
                                                                                                                       
     ***** *    **   ***            *****  *       * ***         *****                   ***** **          ***** **    
  ******  *  *****    ***        ******  *       *  ****  *   ******                  ******  **** *    ******  ***    
 **   *  *     *****   ***      **   *  *       *  *  ****   **   *  *    **         **   *  * ****   **    *  * ***   
*    *  **     * **      **    *    *  *       *  **   **   *    *  *   **** *      *    *  *   **   *     *  *   ***  
    *  ***     *         **        *  *       *  ***            *  *     ****           *  *              *  *     *** 
   **   **     *         **       ** **      **   **           ** **    * **           ** **             ** **      ** 
   **   **     *         **       ** **      **   **           ** **   *               ** **             ** **      ** 
   **   **     *         **     **** **      **   **           ** *****                ** ******         ** **      ** 
   **   **     *         **    * *** **      **   **           ** ** ***               ** *****          ** **      ** 
   **   **     *         **       ** **      **   **           ** **   ***             ** **             ** **      ** 
    **  **     *         **  **   ** **       **  **           *  **    ***            *  **             *  **      ** 
     ** *      *         *  ***   *  *         ** *      *        *       ***             *                 *       *  
      ***      ***      *    ***    *           ***     *     ****         ***        ****         *   *****       *   
       ******** ********      ******             *******     *  *****        ***  *  *  ***********   *   *********    
         ****     ****          ***                ***      *    ***           ***  *     ******     *       ****      
                                                            *                       *                *                 
                                                             **                      **               ** 
                                                             
                                𝗛𝗢𝗬 𝗔𝗡𝗢 𝗜𝗜𝗦𝗞𝗜𝗗 𝗞𝗔𝗣𝗔𝗡𝗚 𝗧𝗔𝗡𝗚𝗜𝗡𝗔 𝗞𝗔?, 𝗚𝗔𝗚𝗢 𝗠𝗔𝗚 𝗧𝗥𝗔𝗕𝗔𝗛𝗢 𝗞𝗔
    `.trim());
  }

  const script = scripts[id];
  
  if (!script) {
    return res.status(404).send('-- Script not found');
  }

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(script);
}
