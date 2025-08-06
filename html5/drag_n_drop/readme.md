# html drag_n_drop

- html5 考点
    新的交互相关
- ipad 为何成功
    用户体验 拖拽体验 操作很简单 好理解
    google 拖拽式上传 
- 媒体查询
    - PC First 的设计 
         Mobile First 设计 移动端设计 移动优先 80% 体验
    - 查询相关的媒体（设备）做适配
        @media (条件 一般<600 是移动端， <1024 ipad， >1200 PC ，1600+ lg 大尺寸)
    - 多设备适配 移动时代 
- drag and drop 细节
    - 有些元素有默认的drag 特性
    比如图片就可以拖拽到别的tab 显示
    dragStart preventDefault 取消默认的拖拽行为
    dragEnd
    - 给元素添加dragable = true 实现html5 drag 功能 拖拽
    - 模拟现实中的用户体验 元素，容器可以drop的效果
    dragEnter  preventDefault 在这里可以添加一些样式反馈
    dragOver  preventDefault
    dragLeave 
    drop 实现删除、拖拽上传
