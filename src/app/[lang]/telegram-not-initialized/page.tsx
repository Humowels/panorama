const TelegramNotInitialized = () => {

  return (
    <div className=" items-start justify-center">
      <h2>Telegram Not Initialized</h2>
{JSON.stringify(window?.Telegram)}
    </div>
  );
};

export default TelegramNotInitialized;
