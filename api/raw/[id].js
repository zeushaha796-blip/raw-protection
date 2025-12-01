export default function handler(req, res) {
  const { id } = req.query;
  const userAgent = req.headers['user-agent'] || '';

  const isRoblox = userAgent.includes('Roblox') || 
                   userAgent.includes('RobloxStudio') ||
                   userAgent.includes('RobloxApp');

  const scripts = {
    'c6a59a0cd9dd8d273237ef3841ff6998': `
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
╔═══════════════════════════════════════╗
║          ACCESS DENIED                ║
║                                       ║
║  This script is protected.            ║
║  Direct access is not allowed.        ║
║                                       ║
║  Use loadstring() to execute.         ║
╚═══════════════════════════════════════╝
    `.trim());
  }

  const script = scripts[id];
  
  if (!script) {
    return res.status(404).send('-- Script not found');
  }

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(script);
}
