import SeeWorkButton from "./SeeMyWorkButton";

const ChatContact = () => {
  return (
    <section className="flex flex-col w-full py-10">
      <MyMessage text="yooo you def cracked or smth??" />
      <div className="rounded-tl-lg bg-primary/50 text-gray-300 rounded-tr-lg rounded-br-lg self-start px-2 py-1">
        <p>thanks alot!</p>
      </div>
      <MyMessage text="Where can i actually talk with you?" />
      <div className="rounded-tl-lg bg-zinc-800/40 rounded-tr-lg text-gray-300 rounded-br-lg self-start px-2 py-1 mb-2">
        <p>reach me?😂...there are alot of option</p>
      </div>
      <div className="rounded-tl-lg bg-zinc-800/40 text-gray-300  rounded-tr-lg rounded-br-lg self-start px-2 py-1 mb-2">
        <p>but preferrably email...i guess</p>
      </div>
      <div className="rounded-tl-lg bg-zinc-800/40 text-gray-300  rounded-tr-lg rounded-br-lg self-start p-4  mb-2">
        <form className="w-80 flex flex-col gap-2">
          <label className="font-medium">Subject</label>
          <input
            className="block outline-none border-none w-full bg-gray-200/10 p-2 rounded"
            placeholder="Subject Line"
          />
          <label className="font-medium">Body</label>
          <textarea
            className="block resize-none w-full outline-none border-none h-56 bg-gray-200/10 p-2 rounded"
            placeholder="tell me what you wanna discuss..am all ear's max(3000) words pls😭"
          />
          <SeeWorkButton text="Send Message" />
        </form>
      </div>
      <MyMessage text="great....are they other ways to contact you apart from mail?" />
      <div className="rounded-tl-lg bg-zinc-800/40 text-gray-300  rounded-tr-lg rounded-br-lg self-start px-2 py-1 mb-2">
        <p>ofc...they are😂</p>
      </div>
      <MyMessage text="great💯" />
    </section>
  );
};

export default ChatContact;

const MyMessage = ({ text }: { text: string }) => {
  return (
    <div className="self-end bg-green-500 rounded-tr-lg rounded-tl-lg rounded-bl-lg px-2 py-1 mb-2">
      <p>{text}</p>
    </div>
  );
};
