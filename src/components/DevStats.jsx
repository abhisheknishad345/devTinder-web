
const DevStats = () => {

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    DevTinder Community
                </h2>

                <p className="text-gray-500 mt-2">
                    Connect, collaborate and grow together 🚀
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

               
                <div className="bg-base-200 rounded-2xl p-6 text-center shadow">
                    <div className="text-4xl mb-3">
                        👨‍💻
                    </div>

                    <h3 className="text-4xl font-bold">
                        1,240+
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Developers
                    </p>
                </div>

                
                <div className="bg-base-200 rounded-2xl p-6 text-center shadow">
                    <div className="text-4xl mb-3">
                        🤝
                    </div>

                    <h3 className="text-4xl font-bold">
                        580+
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Connections
                    </p>
                </div>

               
                <div className="bg-base-200 rounded-2xl p-6 text-center shadow">
                    <div className="text-4xl mb-3">
                        🚀
                    </div>

                    <h3 className="text-4xl font-bold">
                        220+
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Projects
                    </p>
                </div>

            </div>
        </section>
    );
};

export default DevStats;