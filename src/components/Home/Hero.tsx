import { Link } from "react-router";

function Hero() {
  return (
    <div className="min-h-screen bg-gray-50 px-5">
      <div className="mx-auto max-w-6xl">

        <header className="flex items-center justify-between border-b border-gray-200 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            TodoFlow
          </h1>

          <nav className="flex gap-5 text-sm text-gray-600">
            <Link to="/" className="text-violet-600">Home</Link>
            <Link to="/formik">Formik</Link>
            <Link to="/rhf">RHF</Link>
          </nav>
        </header>

        <section className="py-20 text-center">
          <p className="text-sm font-semibold text-violet-600">
            MY REACT PROJECT
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Один Todo-проект.
            <br />
            Два подхода к формам.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
            Создай список задач, подключи Swagger API
            и сравни Formik и React Hook Form.
          </p>
        </section>

        <section className="pb-16">
          <h2 className="text-2xl font-bold text-gray-900">
            Выбери вариант
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Одинаковый функционал — разные библиотеки для работы с формами.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <p className="text-sm font-semibold text-violet-600">
                VERSION 01
              </p>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Formik Todo
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Создавай, редактируй и удаляй задачи.
                Используй Formik для управления формами.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p>Добавление задач</p>
                <p>Редактирование задач</p>
                <p>Удаление задач</p>
                <p>Получение данных через API</p>
              </div>

              <Link
                to="/formik"
                className="mt-8 block rounded-lg bg-violet-600 py-3 text-center text-sm font-medium text-white transition hover:bg-violet-700"
              >
                Открыть Formik Todo
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <p className="text-sm font-semibold text-teal-600">
                VERSION 02
              </p>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                React Hook Form Todo
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Создавай и управляй задачами с помощью
                React Hook Form, TypeScript и Zod.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p>Добавление задач</p>
                <p>Редактирование задач</p>
                <p>Удаление задач</p>
                <p>Валидация через Zod</p>
              </div>

              <Link
                to="/rhf"
                className="mt-8 block rounded-lg bg-teal-600 py-3 text-center text-sm font-medium text-white transition hover:bg-teal-700"
              >
                Открыть RHF Todo
              </Link>
            </div>

          </div>
        </section>

        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
          TodoFlow · React · TypeScript · Axios · Swagger API
        </footer>

      </div>
    </div>
  );
}

export default Hero;