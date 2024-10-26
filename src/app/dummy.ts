<div>
<div className='overflow-x-scroll flex w-full' aria-orientation='horizontal'>
  <div ref={aRef} onClick={(e) => setPosition(e.clientX)
  } className='w-[300px] flex-1 border border-red-200' style={{width:300}}>Lorem Ipsum has been</div>
  <div ref={bRef} onClick={(e) => setPosition(e.clientX)
  } className='w-[300px] border flex-1 border-neutral-700'  style={{width:300}}>look like readable English</div>
  <div ref={cRef} onClick={(e) => setPosition(e.clientX)
  } className='w-[300px] border flex-1'  style={{width:300}}>There are many variations of passages</div>
  <div ref={dRef} onClick={(e) => setPosition(e.clientX)
  } className='w-[300px] border flex-1'  style={{width:300}}>velit esse cillum dolore eu fugiat nulla pariatur</div>
  <div ref={aRef} onClick={(e) => setPosition(e.clientX)
  } className='w-[300px] border  border-red-200' style={{width:300}}></div>
  <div ref={bRef} onClick={(e) => setPosition(e.clientX)} className='w-[300px] border border-neutral-700'>F</div>
  <div ref={cRef} onClick={(e) => setPosition(e.clientX)} className='w-[300px] border'>G</div>
</div>

<div ref={element} className='w-full h-[400px] border mt-5  bg-yellow-50 relative'>
  <div className={`w-10 h-10 bg-red-400 absolute`} style={{
    left: position
  }}></div>
</div>
</div>