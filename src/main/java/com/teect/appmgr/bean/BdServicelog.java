package com.teect.appmgr.bean;

import java.util.Date;

public class BdServicelog {
    private String id;

    private Date oldservicedate;

    private Date newservicedate;

    private String createBy;

    private Date createDate;

    private String updateBy;

    private Date updateDate;

    private String remarks;

    private String flag;

    private String yrq;
    private String xrq;
    private String czrq;

    public String getXrq() {
        return xrq;
    }

    public void setXrq(String xrq) {
        this.xrq = xrq;
    }

    public String getYrq() {

        return yrq;
    }

    public void setYrq(String yrq) {
        this.yrq = yrq;
    }

    public String getCzrq() {

        return czrq;
    }

    public void setCzrq(String czrq) {
        this.czrq = czrq;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public Date getOldservicedate() {
        return oldservicedate;
    }

    public void setOldservicedate(Date oldservicedate) {
        this.oldservicedate = oldservicedate;
    }

    public Date getNewservicedate() {
        return newservicedate;
    }

    public void setNewservicedate(Date newservicedate) {
        this.newservicedate = newservicedate;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy == null ? null : createBy.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy == null ? null : updateBy.trim();
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag == null ? null : flag.trim();
    }
}