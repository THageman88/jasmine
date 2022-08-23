it('Should calculate interest rate for loan', function(){
    const values={
        amount: 1000,
        years : 1,
        rate : 4.8
        };
        expect(calculateMonthlyPayment(values)).toEqual('85.52');
});
