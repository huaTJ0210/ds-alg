class HZArray {
  constructor(length) {
    this.data = [];
    this.size = 0; // 数组中存储的数据值
    this.length = length || 10; // 数组的初始容量
  }

  // （1） ----- 向数组中插入元素------
  addEle(index, el) {
    // 1、判断插入位置是否正确
    if (index < 0 || index > this.size) {
      throw new TypeError('index is not excepted!');
    }
    // 2、判断当前数组是否已经满了
    if (this.size == this.length) {
      this.resizeArray(this.length * 2);
    }
    // 3、当前数组为空
    if (this.size != 0) {
      // 4、将元素插入到指定的位置
      for (let i = this.size - 1; i >= index; i--) {
        this.data[i + 1] = this.data[i];
      }
    }
    this.data[index] = el;
    this.size++;
  }
  unshift(el) {
    this.addEle(0, el);
  }
  push(el) {
    this.addEle(this.size, el);
  }

  // （2） ----- 删除数组指定位置的元素------
  deleteEle(index) {
    if (index < 0 || index >= this.size) {
      throw new TypeError('index is not excepted');
    }
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.size] = undefined;
    this.size--;
    // 当size减小到length的1/4 可以进行缩容积操作
    if (this.size < this.length / 4) {
      this.resizeArray(this.length / 2);
    }
  }
  pop() {
    this.deleteEle(this.size - 1);
  }
  shift() {
    this.deleteEle(0);
  }

  // （3） ----- 查找数组中指定位置的元素 ------
  indexOf(el) {
    if (this.size == 0) {
      return -1;
    }
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == el) {
        return i;
      }
    }
    return -1;
  }

  // 扩容数组
  resizeArray(len) {
    console.log('---resizeArray---');
    let newArray = new Array(len);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }
}
