import data from "../data";
function Communities() {
  return (
    <>
      <h2>COMMUNITIES WE MANAGE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
        {data.map((item) => {
          return (
            <div class="max-w-sm bg-white card">
              <img className="h-72" src={item.image} alt="location" />
              <div className="content">
                <div className="description p-4">
                  <p class="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                </div>
                <div className="title p-4">
                  <h5 class="text-2xl tracking-tight">{item.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Communities;
