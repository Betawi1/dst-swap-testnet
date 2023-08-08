
pragma solidity >=0.8.0;

contract Dsfswap is IERC20, Ownable {
	using SafeMath for uint256;

	IERC20 public usdc;
	IERC20 public dsf;

	constructor(address _usdc, address _dsf) {
		usdc = IERC20(_usdc);
		dsf = IERC20(_dsf);
	}

	function swap(uint256 _amountusdc) public {
		require(_amountusdc > 0);
		require(_amountusdc <= usdc.balanceOf(_msgSender()),
			"USDC in wallet too low."
		);

        // Because USDC is 6 decimals
		uint256 _amountdsf = _amountusdc.mul(8).mul(10**12);

		require(usdc.allowance(_msgSender(), address(this)) >= _amountusdc,
			"USDC allowance too low."
		);
		
		_safeTransferFrom(usdc, _msgSender(), owner(), _amountusdc);
		dsf.transfer(_msgSender(), _amountdsf);
	}

	function _safeTransferFrom(
		IERC20 token,
		address sender,
		address recipient,
		uint256 amount
	) private {
		bool send = token.transferFrom(sender, recipient, amount);
		require(send, "Token transfer failed.");
	}

	function withdrawbalance() public onlyOwner {
		uint256 balance = dsf.balanceOf(address(this));
		dsf.transfer(owner(), balance);
	}

	function allowance(address owner, address spender) external virtual override view returns (uint256) {}
	function approve(address spender, uint256 amount) external virtual override returns (bool) {}
	function balanceOf(address account) external virtual override view returns (uint256) {}
	function totalSupply() external virtual override view returns (uint256) {}
	function transfer(address recipient, uint256 amount) external virtual override returns (bool) {}
	function transferFrom(address sender, address recipient, uint256 amount) external virtual override returns (bool) {}
}