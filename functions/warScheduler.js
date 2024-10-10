const cron = require('node-cron');
const { ChannelType } = require('discord.js');

module.exports = (client) => {
  const channelId = '1293920884016418867'; // Replace with your target channel ID
  const roleId = '1208254412691341332'; // Replace with the role ID you want to mention

  // Function to send the message
  const sendWarMessage = async () => {
    try {
      const channel = await client.channels.fetch(channelId);

      if (!channel || channel.type !== ChannelType.GuildText) {
        console.error('Invalid channel or channel type.');
        return;
      }

      // Sending the message to the channel
      await channel.send(`Call The Turfs Now! <@&${roleId}>`);
      console.log('War message sent successfully.');
    } catch (error) {
      console.error('Error sending the war message:', error);
    }
  };

  // Schedule the task for every Thursday and Friday at 12:15 AM
  cron.schedule('15 0 * * 4,5', () => {
    console.log('Executing scheduled task: War message');
    sendWarMessage();
  }, {
    timezone: "Your/Timezone" // Optional: set your preferred timezone, e.g., "America/New_York"
  });
};
