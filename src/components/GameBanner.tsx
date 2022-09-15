interface GameBannerProps {
    imageUrl: string 
    title: string
    adsAmount: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden transition-all hover:scale-105'>
        <img src={props.imageUrl} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adsAmount} anúncio(s)</span>
        </div>
    </a>
  );
}