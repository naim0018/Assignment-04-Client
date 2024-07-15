import { useState } from "react";
// import Loading from "../UI/Loading/Loading";
import { TbCurrencyTaka } from "react-icons/tb";

const CartsContainer = () => {
  const [emptyCarts] = useState();

  return (
    <div className="min-h-screen">
    {/* {isLoading && <Loading />} */}
    {emptyCarts ? (
      <p className="flex flex-col h-screen -mt-20 items-center justify-center border  text-5xl font-bold">
        <span className="">
          Your cart is <span className="text-red-600 uppercase">empty</span>{" "}
        </span>
        <span className="">
          Please <span className="uppercase text-green-600">add</span>{" "}
          something to Cart
        </span>
      </p>
    ) : (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>
              {/* Header end */}

              {/* <div className="mt-8">
                <div className="">
                  {userCarts?.map((item) => (
                    <ShowCartData
                      key={item._id}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div> */}

                {/* Checkout */}

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <hr className="border border-gray-400" />
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-end gap-5 text-lg font-bold">
                        <dt className="text-lg font-bold">Total : </dt>
                        <dd className="flex items-center justify-center">
                          {/* {subTotal} */}
                          <TbCurrencyTaka />
                        </dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-xs flex items-center justify-center">
                          {/* {discount} */}
                          <TbCurrencyTaka /> Discounts Applied
                        </p>
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <button
                      // onClick={handleOpenModal}
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </button>
                      {/* {
                        openModal && <PendingModal 
                        userCarts={userCarts}
                        email={user.email}
                        subTotal={subTotal}
                        openModal={openModal} setOpenModal={setOpenModal}/>
                      } */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
      </section>
      )
    }
  </div>
  )
}
export default CartsContainer