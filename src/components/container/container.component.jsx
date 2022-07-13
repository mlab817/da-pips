const Container = ({ children }) => {
  return (
    <main className="flex flex-col flex-grow px-4 py-4">
      {children}
    </main>
  )
}

export default Container;
