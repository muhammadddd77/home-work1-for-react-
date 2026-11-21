function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF1E8]">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-[#202B00]">
          FoodZero
        </h1>

        <div className="mx-auto mt-6 h-10 w-10 animate-spin rounded-full border-4 border-[#DDE2D4] border-t-[#202B00]"></div>

        <p className="mt-4 text-[#202B00]">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;