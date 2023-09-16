/* eslint-disable react/prop-types */
const Cart = ({selectedCourse, sumCreditHrs, sumPrice, remainingHrs}) => {
    return (
        <div>
            <div className="p-3 flex flex-col gap-3">
            <h4 className="text-sky-700 font-semibold">
              Remaining Credit {remainingHrs}hr
            </h4>
            <hr />
            <h2 className="card-title">Course Name</h2>
            <ul className="text-left">
            {
                selectedCourse.map((course, index) => (
                        <li key={course.id}>{`${index + 1}. ${course.title}`}</li>
                ))
            }
            </ul>
            <hr />
            <p className="text-left">Total Credit Hour: {sumCreditHrs}</p>
            <hr />
            <h5 className="text-left">Total Price: {sumPrice.toFixed(2)} USD</h5>
          </div>
        </div>
    );
};

export default Cart;