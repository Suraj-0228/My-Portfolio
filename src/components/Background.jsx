export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute -top-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full opacity-20 blur-[130px] bg-gradient-to-br from-brand-cyan to-brand-blue" />
        <div className="blob-2 absolute -bottom-[10%] right-[10%] w-[55vw] h-[55vw] rounded-full opacity-20 blur-[130px] bg-gradient-to-br from-brand-violet to-brand-pink" />
      </div>
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 85%)',
        }}
      />
    </>
  )
}
